# OC Archive

Just Pures OCS 

## Files

- `index.html` — page structure and character cards
- `style.css` — visual design and responsive layout
- `script.js` — character profile pop-ups

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js`.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and the `/ (root)` folder.
6. Save. GitHub will give you a `github.io` website address.

## Adding character art

Replace a placeholder like:

```html
<div class="oc-image placeholder">CHARACTER 01</div>
```

with:

```html
<img class="oc-image" src="images/character1.png" alt="Character Name">
```

Then add your image to an `images` folder in the repository.

You can also change the colors at the top of `style.css` using the variables in `:root`.
