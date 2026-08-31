-- Second pass over legacy article links: the retired 'Manhattan Brownstones
-- for Sale' banner CTAs and sold-listing pages now point at the live listings
-- page, the author archive at the blog index.
begin;
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/manhattan-brownstones/index.html"', 'href="/current-listings/"');  -- 148x
update public.posts set body = replace(body, 'href="../manhattan-brownstones/index.html"', 'href="/current-listings/"');  -- 38x
update public.posts set body = replace(body, 'href="../nyc-brownstones-parking/index.html"', 'href="/how-to-find-townhouse-with-garage/"');  -- 7x
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/index.html"', 'href="/current-listings/"');  -- 2x
update public.posts set body = replace(body, 'href="../263-west-139th-street-2/index.html"', 'href="/current-listings/"');  -- 2x
update public.posts set body = replace(body, 'href="../2001-fifth-avenue/index.html"', 'href="/current-listings/"');  -- 2x
update public.posts set body = replace(body, 'href="../author/stanley-montfort/page/3/index.html"', 'href="/blog/"');  -- 1x
update public.posts set body = replace(body, 'href="../54-east-66th-street/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../179-east-71st-street-2/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../455-franklin-avenue-2/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../235-west-138th-street/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../218-west-139th-street-2/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../730-saint-nicholas-ave/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/manhattan/hudson-yards/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../featured-brownstones-for-sale/manhattan/lower-east-side/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../850-saint-nicholas-avenue-3/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../36-hamilton-terrace/index.html"', 'href="/current-listings/"');  -- 1x
update public.posts set body = replace(body, 'href="../360-west-123rd-street/index.html"', 'href="/current-listings/"');  -- 1x
commit;
