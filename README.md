How My Capstone Satisfies the Requirements
==============================================



1. Business Objective.

Bring insightful tennis stats to tennis fans.

Tennis is the 4th most popular sport in the world [1].  The objective is to bring valuable information and insights about professional tennis players to tennis fans.

Information is valuable.  We will provide both data and predictions to people through interactive visualizations.  In addition to tennis hobbyists, people who gamble on tennis would find the info particularly beneficial.  Professional tennis players themselves would find the info helpful in developing potential weaknesses to improve or exploit.

The [web app](http://162.243.168.182:5001/) could be monetized by offering basic features for free and charging for advanced features.  For example, the basic version may only allow you to compare at most 5 players, but the advanced version may allow you to compare 14.



2. Data Ingestion.

Data will be combined, processed, and updated periodically.

The data comes from two CSV files that are posted at [4].  I plan to add match-level stats in the future which will require additional data from [4], [2], [3], [5], or [6].

The data is loaded with pandas, widdled down, combined, and processed into the information we need.  In particular, text-splitting and regular expressions are used to pull player info out of 1 column [here](https://github.com/MareoRaft/tennis-backend/blob/master/data_ingestion/ingest_points.py#L31); maps are used to create new columns from existing column combinations; and then data is aggregated per-player [here](https://github.com/MareoRaft/tennis-backend/blob/master/analysis/stat.py#L9).  For the PageRank algorithm (see [here](https://github.com/MareoRaft/tennis-backend/blob/master/analysis/pagerank.py)), point result information is aggregated per player-pair and a weighted directed graph is created.  Networkx then computes the pagerank.

The ingestion pipeline is fully automated (it is enough to run [this function](https://github.com/MareoRaft/tennis-backend/blob/master/data_ingestion/ingest_points.py#L82)) and I plan to rerun it periodically on the latest-and-greatest professional tennis data (the source data is updated every few months).



3. Visualizations.

The project contains a bar chart which is used for both the stats-comparisons and the PageRank comparison.  There exist 6 controls for interacting with the data as well as the zoom-interactivity of the amChart itself.  You can view it [here](http://162.243.168.182:5001/).



4. Interactive Website.

Users interact with the project via a website.  Users explore the data by choosing a (1) statistic, (2) normalization, (3) gender, and some other options.  Users can click on info buttons to get explanations of the various choices and methods used to compute the data.  Users can click and drag on the chart to see cross sections of the view.

The user interactivity is client-side, and the client will make calls to the server to update the data as necessary.  Tools used to achieve this include [JavaScript](https://www.w3schools.com/js/default.asp), [React](https://create-react-app.dev/), [Material-UI](https://material-ui.com/), [amCharts](https://www.amcharts.com/), [Python](https://www.python.org/) 3, [Flask](https://palletsprojects.com/p/flask/), [Pandas](https://pandas.pydata.org/), and [Networkx](https://networkx.org/).



5. Deliverable.

The above already describes the work done on the capstone, the tools used, and the data ingestion; but not the analysis and results.  I will include those below.  The deliverable is this very [repository](https://github.com/MareoRaft/tennis-frontend-tdi) and this very README.md file.  Point 3 includes a link to the visualizations.



6. Analysis and Results.

TODO: fill in this section.
TODO: move this file to README.md in the frontend repo.



[1] https://www.totalsportek.com/most-popular-sports/
[2] https://github.com/JeffSackmann/tennis_wta
[3] https://github.com/JeffSackmann/tennis_atp
[4] https://github.com/JeffSackmann/tennis_MatchChartingProject
[5] https://github.com/JeffSackmann/tennis_slam_pointbypoint
[6] https://github.com/JeffSackmann/tennis_pointbypoint
