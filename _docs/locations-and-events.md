# Locations and events

## Locations

### Unique ids

All locations include a `branch-unique-id`. The website looks for this unique id in event YAML to place events in the correct location, so make sure you add them to events properly.

These take the format `place-library`, e.g. `aldeburgh-library`, `leiston-library`, `wickham-market-library`.

Some libraries have extended names (e.g. the include the word 'Saint' or 'County'). These have the following unique ids:

- `capel-st-mary-library`
- `bury-st-edmunds-library`
- `gainsborough-community-library`
- `ipswich-county-library`

### Template

The website uses the `library.html` layout file to create library pages.

You can use the following YAML:

- `branch-unique-id`: unique id used as a key in events (e.g. `ipswich-county-library`)
- `branch-name`: the library name to display on pages (e.g. `Ipswich County Library`)
- `branch-image`: url to library image (e.g. `/images/branches/ipswich-county-library.jpg`)
- `branch-monday-hours`: the libraries Monday opening hours (e.g. `0900 – 1800`). Omit if the library isn't open on a Monday
- `branch-tuesday-hours`:	0900 – 1900
- `branch-wednesday-hours`: 0900 – 1800
- `branch-thursday-hours`: 0900 – 1800
- `branch-friday-hours`: 0900 – 1900
- `branch-saturday-hours`: 0830 – 1700
- `branch-sunday-hours`: 1000 – 1600
- `branch-manager`
- `branch-address`: the library's address until the postcode (e.g `Northgate Street, Ipswich`)
- `branch-post-code`
- `branch-tel`: include area code (e.g. `01473 263810`)
- `branch-friends`: name of the library friend group `Friends of Ipswich County Library`
- `branch-friends-url`: link to the friends' group web page or site (e.g. `/about/member-organisations/friends-of-stowmarket-library`)
- `branch-newsletter`: link to any newsletter (e.g. `/assets/pdf/friends-of-ipswich-county-library-membership-form.pdf`)
- `branch-social-media`: boolean (just tests for its presence)
- `branch-twitter`: the Twitter account handle (e.g. `ipswich_library`)
- `branch-facebook`: the Facebook account handle (e.g. `ipswichcountylibrary`)
- `branch-instagram`: the Instagram account handle (e.g. `ipswich_county_library`)
- `branch-wifi`: boolean (just tests for its presence)
- `branch-accessibility`: link to the library's DisableGo page (e.g. `http://www.disabledgo.com/access-guide/suffolk-county-council/ipswich-county-library-2`)
- `branch-special-collections`: list of special collections in the library (e.g. `African Caribbean resources, Indic language resources, Music & drama library`)
- `branch-room-hire`: link to the library's room hire page (e.g. `/libraries/room-hire/ipswich-county-library`)
- `branch-display-space`: text describing display space (e.g. `"
<strong>Double sided display case</strong>
<p>Please book two weeks in advance. Displays can be put in the case after 2pm on Mondays and must be removed by 12 noon the following Monday.</p>
<ul>
  <li>Profit organisation hire: £80.30 per week</li>
  <li>Non-profit organisation hire: £40.15 per week</li>
</ul>"`)
- `breadcrumb`: boolean (just tests for its presence), always present
