# DRIPORA

## Current State
Single-page app with Nav, Hero, FeaturedCollections, OurStory, ShopPreview, Newsletter, Contact, and Footer sections. Version 2 deployed with working Contact form.

## Requested Changes (Diff)

### Add
- Size Guide section: a table or visual guide showing clothing sizes (XS–XXL) with measurements in cm and inches for tops, bottoms, and outerwear
- FAQ section: accordion-style with common questions about shipping, returns, sizing, materials, and launch date
- Improve ShopPreview with a filter bar (category tabs: All, Tops, Bottoms, Outerwear, Accessories)

### Modify
- App.tsx: add SizeGuide and FAQ components between ShopPreview and Newsletter
- Nav: add SIZE GUIDE and FAQ links

### Remove
- Nothing

## Implementation Plan
1. Create SizeGuide.tsx component with size table (XS-XXL, chest/waist/hips in cm + inches)
2. Create FAQ.tsx component using Accordion UI for 6-8 common questions
3. Add category filter tabs to ShopPreview
4. Register both new components in App.tsx and Nav links
