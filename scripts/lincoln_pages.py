#!/usr/bin/env python3
"""Builds the static Lincoln service pages in public/lincoln/.

Run from the repo root:  python3 scripts/lincoln_pages.py
Copy rule: only facts already on paintnebraska.com. No invented stats or reviews.
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "public" / "lincoln"
PHONE = "(517) 755-7966"
RAW = "5177557966"
BASE = "https://paintnebraska.com"

SERVICE_OPTIONS = [
    ("House Washing", "House Washing"), ("Window Cleaning", "Window Cleaning"),
    ("Concrete Cleaning", "Concrete & Brick Cleaning"), ("Roof Cleaning", "Roof Cleaning"),
    ("Painting", "Exterior/Interior Painting"), ("Deck Staining", "Deck & Fence Staining"),
    ("Graffiti Removal", "Graffiti & Stain Removal"), ("Pool Cleaning", "Pool Deck Cleaning"),
    ("Christmas Lights", "Christmas Light Installation"), ("Other", "Other / Multiple Services"),
]

COMMON_FAQ = [
    ("Are you licensed and insured?", "Yes. We're fully licensed, bonded and insured, so you're protected on every job."),
    ("What payment methods do you take?", "Cash, check and major credit cards. If you need a payment arrangement on a bigger job, we're happy to talk through options."),
]


def options(first):
    ordered = [o for o in SERVICE_OPTIONS if o[0] in first] + [o for o in SERVICE_OPTIONS if o[0] not in first]
    return "\n".join(f'          <option value="{v}">{label}</option>' for v, label in ordered)


def img(src, alt, w, h, lazy=True, extra=""):
    load = ' loading="lazy" decoding="async"' if lazy else ' fetchpriority="high"'
    return f'<img src="{src}" alt="{alt}" width="{w}" height="{h}"{load}{extra}>'


def diptych(before, after, cap, lazy=True):
    b_src, b_alt = before
    a_src, a_alt = after
    return f'''<div class="ba">
        <figure>{img(b_src, b_alt, 1100, 825, lazy)}<span class="tag">Before</span></figure>
        <figure>{img(a_src, a_alt, 1100, 825, lazy)}<span class="tag after">After</span></figure>
        <p class="ba-cap">{cap}</p>
      </div>'''


FACTS = '''<div class="hero-facts"><div class="wrap"><ul>
    <li><strong>Free estimates</strong>Written, before any work starts</li>
    <li><strong>Licensed &amp; insured</strong>Bonded too, on every job</li>
    <li><strong>Honest pricing</strong>No hidden fees or surprises</li>
    <li><strong>Pay how you like</strong>Cash, check or card</li>
  </ul></div></div>'''


def page(p):
    hero_actions = f'''<div class="hero-actions">
        <a class="btn btn-red" href="#quote">{p["cta"]}</a>
        <a class="btn btn-ghost" href="tel:{RAW}">Call {PHONE}</a>
      </div>'''
    if p.get("hero_ba"):
        hero = f'''<section class="hero split">
  <div class="wrap hero-inner">
    <div>
      <p class="kicker">{p["kicker"]}</p>
      <h1>{p["h1"]}</h1>
    </div>
    <div>
      <p class="lede">{p["lede"]}</p>
      {hero_actions}
    </div>
  </div>
  <div class="wrap">{diptych(*p["hero_ba"], lazy=False)}</div>
  {FACTS}
</section>'''
        preload = p["hero_ba"][0][0]
    else:
        hero = f'''<section class="hero">
  <div class="hero-bg">{img(p["hero"], p["hero_alt"], 1200, 675, lazy=False)}</div>
  <div class="wrap hero-inner">
    <p class="kicker">{p["kicker"]}</p>
    <h1>{p["h1"]}</h1>
    <p class="lede">{p["lede"]}</p>
    {hero_actions}
  </div>
  {FACTS}
</section>'''
        preload = p["hero"]

    svc = "\n".join(
        f'        <div class="svc-row"><span class="svc-num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>'
        for i, (t, d) in enumerate(p["svc"]))
    jobs = "\n      ".join(p["jobs"])
    steps = "\n".join(f"      <li><h3>{t}</h3><p>{d}</p></li>" for t, d in p["steps"])
    faq = p["faq"] + COMMON_FAQ
    faq_html = "\n".join(f"        <details><summary>{q}</summary><p>{a}</p></details>" for q, a in faq)
    url = f'{BASE}/lincoln/{p["slug"]}/'
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "name": p["svc_name"], "serviceType": p["svc_name"], "url": url,
         "areaServed": {"@type": "City", "name": "Lincoln", "containedInPlace": {"@type": "State", "name": "Nebraska"}},
         "provider": {"@type": "LocalBusiness", "@id": BASE, "name": "Platinum ProWash & Paint", "telephone": PHONE, "url": BASE,
                      "address": {"@type": "PostalAddress", "addressLocality": "Beatrice", "addressRegion": "NE", "addressCountry": "US"}}},
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]},
    ]}

    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]}</title>
<meta name="description" content="{p["desc"]}">
<link rel="canonical" href="{url}">
<meta name="theme-color" content="#0A1628">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="website">
<meta property="og:title" content="{p["title"]}">
<meta property="og:description" content="{p["desc"]}">
<meta property="og:image" content="{BASE}{p["og"]}">
<meta property="og:url" content="{url}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/lincoln/lincoln.css">
<link rel="preload" as="image" href="{preload}">
<script type="application/ld+json">{json.dumps(ld)}</script>
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="/">Platinum <span>ProWash</span> &amp; Paint</a>
  <a class="top-call" href="tel:{RAW}"><small>Call or text</small>{PHONE}</a>
</div></header>

<main>
{hero}

<section class="band"><div class="wrap">
  <p class="eyebrow">{p["svc_eyebrow"]}</p>
  <h2>{p["svc_h2"]}</h2>
  <p class="intro">{p["svc_intro"]}</p>
  <div class="svc-grid">
    <figure class="svc-photo">{img(p["svc_photo"][0], p["svc_photo"][1], 1100, 825)}<figcaption>{p["svc_photo"][2]}</figcaption></figure>
    <div class="svc">
{svc}
    </div>
  </div>
</div></section>

<section class="band paper"><div class="wrap">
  <p class="eyebrow">Real jobs</p>
  <h2>{p["jobs_h2"]}</h2>
  <div class="jobs">
      {jobs}
  </div>
</div></section>

<section class="band"><div class="wrap">
  <p class="eyebrow">How it works</p>
  <h2>Three steps, no surprises</h2>
  <ol class="steps">
{steps}
  </ol>
</div></section>

<section class="band paper"><div class="wrap faq-grid">
  <div class="faq-side">
    <p class="eyebrow">Questions</p>
    <h2>{p["faq_h2"]}</h2>
    <p class="intro">Don't see yours? Call or text and ask.</p>
    <a class="side-call" href="tel:{RAW}">{PHONE}</a>
  </div>
  <div class="faq">
{faq_html}
  </div>
</div></section>

<section class="band quote" id="quote"><div class="wrap quote-grid">
  <div>
    <p class="eyebrow">Free estimate</p>
    <h2>{p["quote_h2"]}</h2>
    <p class="intro">{p["quote_intro"]}</p>
    <a class="big-phone" href="tel:{RAW}">{PHONE}</a>
    <p class="small">Call or text. Based in Beatrice, serving Lincoln.</p>
  </div>
  <form class="f" name="contact" method="POST" action="/success.html" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <p class="hp"><label>Don't fill this out: <input name="bot-field"></label></p>
    <div class="hp" aria-hidden="true"><input type="text" name="website" tabindex="-1" autocomplete="off"></div>
    <div><label for="name">Name</label><input id="name" name="name" required autocomplete="name"></div>
    <div><label for="phone">Phone</label><input id="phone" name="phone" type="tel" required autocomplete="tel"></div>
    <div class="full"><label for="email">Email</label><input id="email" name="email" type="email" required autocomplete="email"></div>
    <div class="full"><label for="address">Address in Lincoln</label><input id="address" name="address" autocomplete="street-address"></div>
    <div class="full"><label for="service">Service</label>
      <select id="service" name="service" required>
          <option value="">Pick one...</option>
{options(p["form_first"])}
      </select></div>
    <div class="full"><label for="message">What needs doing?</label><textarea id="message" name="message" rows="4" placeholder="{p["form_ph"]}"></textarea></div>
    <div class="full"><button class="btn btn-red" type="submit">{p["cta"]}</button></div>
  </form>
</div></section>

<nav class="also" aria-label="More services"><div class="wrap">
  <strong>Also in Lincoln:</strong>
  {p["also"]}
  <a href="/#services">All services</a>
</div></nav>
</main>

<footer class="foot"><div class="wrap">
  <span>&copy; <span id="y">2026</span> Platinum ProWash &amp; Paint. Based in Beatrice, serving Lincoln and nearby towns.</span>
  <a href="/">paintnebraska.com</a>
</div></footer>

<div class="callbar">
  <a class="btn btn-red" href="tel:{RAW}">Call</a>
  <a class="btn btn-ghost" href="sms:{RAW}">Text</a>
  <a class="btn btn-ghost" href="#quote">Estimate</a>
</div>
<script>document.getElementById('y').textContent=new Date().getFullYear()</script>
</body>
</html>
'''


IMG = "/lincoln/img/"

PRESSURE = dict(
    slug="pressure-washing",
    title="Pressure Washing in Lincoln, NE | Platinum ProWash & Paint",
    desc="Soft-wash house washing, roof, concrete, deck and window cleaning in Lincoln, NE. Free written estimates, licensed and insured. Call or text (517) 755-7966.",
    og="/images/gallery/house-clean-lakehouse.jpg",
    kicker="Lincoln, Nebraska",
    h1="Pressure washing<br> in <em>Lincoln.</em>",
    lede="Siding, roofs, driveways, decks and windows, cleaned without the damage a high-pressure blast can do. Soft surfaces get a gentle wash. Concrete gets the real pressure.",
    cta="Get a free estimate",
    hero=IMG + "house-clean-lakehouse.webp",
    hero_alt="White two-story house with balconies, freshly washed",
    svc_name="Pressure washing",
    svc_eyebrow="What we clean",
    svc_h2="The right pressure for each surface",
    svc_intro="Siding and shingles need a gentle wash. Concrete can take more. Here's how we handle each.",
    svc_photo=(IMG + "house-before-algae.webp", "Vinyl siding streaked green with algae before washing",
               "Algae on siding like this comes off with a soft wash, not a blaster."),
    svc=[("House washing (soft-wash)", "Low pressure plus cleaner to take dirt, mold, mildew and algae off siding without forcing water behind it."),
         ("Roof cleaning", "Non-pressure soft wash for black streaks, algae and moss, so your shingles don't get stripped."),
         ("Driveways, patios and brick", "We blast away oil spots, weathering and tough stains on concrete and brick."),
         ("Decks and fences", "Cleaned and prepped, and stained or sealed afterward if you want the wood protected."),
         ("Windows", "Inside and out, buildup and streaks gone so the light comes through."),
         ("Pool decks", "Algae, mildew and slippery buildup off the concrete and tile around the pool.")],
    jobs_h2="Before and after, from one of our jobs",
    jobs=[diptych((IMG + "before_pool1.webp", "Pool with stained, yellowed tile before cleaning"),
                  (IMG + "after_pool1.webp", "Same pool with bright blue and white tile after cleaning"),
                  "Pool and tile cleaning. Same pool, before and after.")],
    steps=[("Call, text or send the form", "Tell us what needs cleaning and where you are in Lincoln."),
           ("We look and quote", "We check the surfaces, pick the method and give you a written price up front."),
           ("We wash", "Most house and driveway jobs are done in a few hours, and you often don't need to be home.")],
    faq_h2="Pressure washing questions",
    faq=[("Will pressure washing damage my siding, deck or roof?", "No. We use low-pressure soft-wash methods on siding, roofs and other delicate surfaces, so they get clean without being blasted."),
         ("How long does it take?", "Most house washing and driveway jobs are done in a few hours. We'll give you a timeline up front."),
         ("Do I need to be home?", "Not always. For most exterior jobs we just need access to the areas we're cleaning and a water source."),
         ("How often should a house be washed?", "Most homes do well with a full exterior cleaning every 1 to 2 years, depending on shade, trees and weather. We can suggest a schedule for yours."),
         ("Do you come to Lincoln?", "Yes. We're based in Beatrice and proudly serve Lincoln. Not sure you're in our area? Call and we'll tell you.")],
    quote_h2="Get a pressure washing price for your Lincoln home",
    quote_intro="Send the form or call. We'll set a time to look at it and give you a clear, written quote.",
    form_first=["House Washing", "Concrete Cleaning", "Roof Cleaning"],
    form_ph="Example: two-story house, north side has green on the siding, plus the driveway.",
    also='<a href="/lincoln/painting/">Painting in Lincoln</a>',
)

PAINTING = dict(
    slug="painting",
    title="House Painting in Lincoln, NE | Platinum ProWash & Paint",
    desc="Exterior and interior painting in Lincoln, NE: houses, garages, rooms, decks and fences. Free written estimates, licensed and insured. Call or text (517) 755-7966.",
    og="/images/before-after/painting/after_paint3.jpg",
    kicker="Lincoln, Nebraska",
    h1="House painting<br> in <em>Lincoln.</em>",
    lede="Exterior and interior painting, with the washing and prep done by the same crew, so the paint goes on a clean surface.",
    cta="Get a free estimate",
    hero_ba=((IMG + "before_paint3.webp", "Small house with peeling tan paint before painting"),
             (IMG + "after_paint3.webp", "Same house painted blue-green with white trim"),
             "One of our exterior repaints. Same house, before and after."),
    svc_name="House painting",
    svc_eyebrow="What we paint",
    svc_h2="Prep first, then paint",
    svc_intro="We pressure wash too, so the surface gets cleaned properly before the first coat goes on.",
    svc_photo=(IMG + "deck-stained-showcase.webp", "Covered porch deck with a fresh dark stain",
               "A deck we cleaned and stained."),
    svc=[("Exterior house painting", "Siding and trim, washed and prepped first, then smooth, even coats that protect it from Nebraska weather."),
         ("Interior painting", "Rooms, ceilings, trim and doors, with clean, even finishes."),
         ("Garages and outbuildings", "Detached garages, sheds and shops, painted to match the house or on their own."),
         ("Deck and fence staining", "Cleaned, prepped and stained or sealed to bring the grain back and keep the weather off."),
         ("Commercial spaces", "Storefronts and business interiors.")],
    jobs_h2="Rooms we've painted",
    jobs=[diptych((IMG + "before_paint4.webp", "Bedroom with patched, unpainted walls"),
                  (IMG + "after_paint4.webp", "Same bedroom with finished, evenly painted walls"),
                  "A bedroom, patched and painted."),
          diptych((IMG + "before_paint5.webp", "Small room with scraped, damaged walls"),
                  (IMG + "after_paint5.webp", "Same room repaired and painted"),
                  "Wall damage repaired, then painted.")],
    steps=[("Call, text or send the form", "Tell us what you want painted and roughly how big it is."),
           ("We look and quote", "We look at the job and give you a written price up front."),
           ("We paint", "Bigger jobs like a full exterior take several days. You'll know the timeline before we start.")],
    faq_h2="Painting questions",
    faq=[("Do you give free painting estimates?", "Yes. Free and no-obligation. Call or send the form and we'll set a time to look at the job."),
         ("How long does an exterior paint job take?", "A full exterior usually takes several days, depending on size and prep. We'll give you the timeline before we start."),
         ("Do you wash the house before painting?", "Yes. We do pressure washing ourselves, so the siding gets cleaned before any paint goes on."),
         ("Do you come to Lincoln?", "Yes. We're based in Beatrice and proudly serve Lincoln. Not sure you're in our area? Call and we'll tell you.")],
    quote_h2="Get a painting price for your Lincoln home",
    quote_intro="Send the form or call. We'll come look and give you a clear, written quote.",
    form_first=["Painting", "Deck Staining"],
    form_ph="Example: repaint the exterior of a ranch house, trim too. Or: two bedrooms and a hallway.",
    also='<a href="/lincoln/pressure-washing/">Pressure washing in Lincoln</a>',
)

if __name__ == "__main__":
    for p in (PRESSURE, PAINTING):
        out = ROOT / p["slug"] / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page(p))
        print("wrote", out)
