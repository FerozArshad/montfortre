-- Repoints legacy links inherited from the old site inside published article
-- bodies. Each target below resolves to a live route or CMS post; links with
-- no live equivalent are intentionally left alone.
begin;
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/harlem-brownstones/index.html"', 'href="/harlem-brownstones/"');  -- 42x
update public.posts set body = replace(body, 'href="../brownstones-in-new-york-city/index.html"', 'href="/brownstones-in-new-york-city/"');  -- 7x
update public.posts set body = replace(body, 'href="../index.html"', 'href="/"');  -- 6x
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/manhattan/west-harlem/index.html"', 'href="/harlem/"');  -- 5x
update public.posts set body = replace(body, 'href="../stanley-montfort/index.html"', 'href="/stanley-montfort/"');  -- 4x
update public.posts set body = replace(body, 'href="../harlems-multi-family-townhouses-are-opportunity-zone-hidden-gem/index.html"', 'href="/harlems-multi-family-townhouses-are-opportunity-zone-hidden-gem/"');  -- 4x
update public.posts set body = replace(body, 'href="../bedford-stuyvesant-brownstones/index.html"', 'href="/bedford-stuyvesant-brownstones-2/"');  -- 3x
update public.posts set body = replace(body, 'href="../crown-heights-brownstones/index.html"', 'href="/crown-heights-brownstones-2/"');  -- 3x
update public.posts set body = replace(body, 'href="../why-you-should-buy-a-brownstone-instead-of-renting-in-nyc/index.html"', 'href="/why-you-should-buy-a-brownstone-instead-of-renting-in-nyc/"');  -- 2x
update public.posts set body = replace(body, 'href="../house-hacking-your-nyc-brownstone/index.html"', 'href="/house-hacking-your-nyc-brownstone/"');  -- 2x
update public.posts set body = replace(body, 'href="../everything-you-need-to-know-about-buying-and-selling-probate-property-in-new-york-city/index.html"', 'href="/everything-you-need-to-know-about-buying-and-selling-probate-property-in-new-york-city/"');  -- 2x
update public.posts set body = replace(body, 'href="../the-case-for-buying-a-townhouse-over-a-condo-or-co-op-in-nyc/index.html"', 'href="/the-case-for-buying-a-townhouse-over-a-condo-or-co-op-in-nyc/"');  -- 2x
update public.posts set body = replace(body, 'href="../top-10-most-expensive-sold-brownstones-in-harlem/index.html"', 'href="/top-10-most-expensive-sold-brownstones-in-harlem/"');  -- 2x
update public.posts set body = replace(body, 'href="../top-4-reasons-to-invest-in-multi-family-properties-amid-the-coronavirus-pandemic/index.html"', 'href="/top-4-reasons-to-invest-in-multi-family-properties-amid-the-coronavirus-pandemic/"');  -- 2x
update public.posts set body = replace(body, 'href="../co-ownership-advantages-and-disadvantages-in-nyc/index.html"', 'href="/co-ownership-advantages-and-disadvantages-in-nyc/"');  -- 2x
update public.posts set body = replace(body, 'href="../is-co-living-the-new-sro-how-to-leverage-this-trend-for-a-greater-roi/index.html"', 'href="/is-co-living-the-new-sro-how-to-leverage-this-trend-for-a-greater-roi/"');  -- 2x
update public.posts set body = replace(body, 'href="../advice-for-buyers-looking-to-purchase-brownstones/index.html"', 'href="/advice-for-buyers-looking-to-purchase-brownstones/"');  -- 1x
update public.posts set body = replace(body, 'href="../a-timeline-for-renovating-your-brownstone/index.html"', 'href="/a-timeline-for-renovating-your-brownstone/"');  -- 1x
update public.posts set body = replace(body, 'href="../selling-your-brownstone-with-tenants-still-there/index.html"', 'href="/selling-your-brownstone-with-tenants-still-there/"');  -- 1x
update public.posts set body = replace(body, 'href="../brownstones-in-new-york-city-for-sale/index.html"', 'href="/brownstones-in-new-york-city-for-sale/"');  -- 1x
update public.posts set body = replace(body, 'href="../manhattan-q3-2023-market-report/index.html"', 'href="/manhattan-q3-2023-market-report/"');  -- 1x
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/bedford-stuyvesant-brownstones/index.html"', 'href="/bedford-stuyvesant-brownstones-2/"');  -- 1x
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/crown-heights-brownstones/index.html"', 'href="/crown-heights-brownstones-2/"');  -- 1x
update public.posts set body = replace(body, 'href="../the-ins-and-out-of-using-co-ownership-to-purchase-a-new-york-city-brownstone/index.html"', 'href="/the-ins-and-out-of-using-co-ownership-to-purchase-a-new-york-city-brownstone/"');  -- 1x
update public.posts set body = replace(body, 'href="../why-townhouses-make-sense-during-and-post-covid-19/index.html"', 'href="/why-townhouses-make-sense-during-and-post-covid-19/"');  -- 1x
update public.posts set body = replace(body, 'href="../understanding-nyc-sro-laws-how-to-convert-an-sro-townhouse-to-a-class-a-property/index.html"', 'href="/understanding-nyc-sro-laws-how-to-convert-an-sro-townhouse-to-a-class-a-property/"');  -- 1x
update public.posts set body = replace(body, 'href="../5-reasons-people-are-purchasing-real-estate-in-this-current-market/index.html"', 'href="/5-reasons-people-are-purchasing-real-estate-in-this-current-market/"');  -- 1x
update public.posts set body = replace(body, 'href="../what-is-my-house-worth/index.html"', 'href="/what-is-my-house-worth/"');  -- 1x
update public.posts set body = replace(body, 'href="../how-to-find-townhouse-with-garage/index.html"', 'href="/how-to-find-townhouse-with-garage/"');  -- 1x
update public.posts set body = replace(body, 'href="../current-listings/index.html"', 'href="/current-listings/"');  -- 1x
commit;
