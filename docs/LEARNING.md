# Learning notes

## Day 1

Lay out the folders

```text
src/
└─ app/
   ├─ layout.tsx          # global <html><body>
   ├─ page.tsx            # "/" landing
   ├─ results/
   │   └─ page.tsx        # "/results"
   └─ not-found.tsx       # custom 404
└─ lib/
   └─ mock/               # static JSON used by results page
```

Add a global layout // src/app/layout.tsx

Made the default font Geist all over the application

In the global layout I now have a header that has the name of the app and the logo on every page.

For Nextjs Image tags, you must use a height and width, but you can control the CSS to alter the size

## Day 2

Installed Prettier and learned how to debug it.

4 Create the landing page with a fake search

5 Mock some data

6 Show the results page

7 Custom 404 (nice touch)

8 Quality-of-life tweaks
