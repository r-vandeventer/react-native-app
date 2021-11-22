# Swyftx Coding Challenge 🎧

# Requirements 📖

- Fetch and display _Released This Week_ songs
  - Use the API path `new-releases`
- Implement a second route to the favourites screen
  - You can reuse the discover UI components to display the favourited items
- Implement a favourites store to allow adding and removing of new release into your favourites.
- Display your favourited items on the new favourites page.
- Loading state/UI _(optional, current UX is already clean)_

# What's Already Been Done 🏁

- UI/UX for all elements, including previews (mobile responsive)

# Notes

- Be sure to make regular git commits

# Robyn's Notes

- I didn't want to add too many packages to the app, having said that: ordinarily I would have managed state with something like Redux. It's become apparent that useContext is likely being cleared when I route to /favourites. Therefore favourites never has any items in its array and do not display.
- I would also normally use react-router to handle routing between webpages, but I'm unsure if this is still applicable in this situation. As such I failed on the 'return an array of routes' and just switched between the two components on route change.
- I converted what I worked on into functional components as I'm more familiar with these.
- I did attempt to create a node.js server for this project but ultimately could not get around some CORS issues, so I just used ajax for simplicity.
- Overall this was fun, but unfortunately has some bugs, like when clicking on the favourite icon, the new releases page clears entries!
- It's in desperate need of a cleanup and refactor.
