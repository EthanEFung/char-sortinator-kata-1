# char-sortinator-kata-1

Specification

  -  On the client, create a form that's centered vertically and horizontally in the page.
  -  This form accepts a string and submits it to the server.
  -  On the server, the string is sorted lexicographically in descending order.
  -  Back on the client, display a table of each submitted string and its sorted version.

Other requirements

  -  Your logic should have a few simple unit tests. Please use Jest.
  -  The UI should not look like complete crap. Demonstrate some basic CSS ability and a bit of design sense to style the form pleasantly.

Logistics

  -  Create a repo from scratch.
  -  Make a series of sensible, well-named commits.
  -  Submit your repo URL.

Notes

As you plan and assemble your solution, refer closely to the assessment rubric. In particular, new web programmers have some difficulty maintaining a modular structure with clean separation of concerns.

Think about what the "concerns" are in a web app. Where does the flow of execution cross a boundary from one area-of-concern to another?

Avoid mixing processing from two such areas. For example, the machinery of dealing directly with HTTP is hardly ever directly related to your app-specific logic. Those are two independent concerns.
