## Hello my frind! in this documention we will explore what **React Scroll** is and how it works.

### Persist Scroll Position Between Page Navigations

This lightweight React package helps you automatically preserve and restore the **scroll position** of pages when navigating between them. It uses React Context and a custom hook to track scroll state, making sure that when a user comes back in any ways to a previously visited page, the **scroll position** is exactly where they left off.

### Use cases :

- Single Page Applications (SPAs) where navigating between views should not reset scroll.
- Restoring scroll position when users navigate "back" in history or open that previously visited page in any ways.
- Enhancing UX by avoiding jarring jumps to the top of the page.

### How it works :

Wrap your application (or specific routes) in the provided context, and use the custom hook inside your pages. The hook captures the scroll position on unmount and restores it on remount—no manual handling needed.
