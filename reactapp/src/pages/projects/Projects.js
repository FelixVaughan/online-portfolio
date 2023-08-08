import CIcon from "@coreui/icons-react";
import { Card, CardContent, Grid, Typography } from "@mui/material/";
import { FaGithubAlt } from "react-icons/fa";

function Project({ header, content, path, stack, reverseOrder = false }) {
  const Img = (
    <Grid item xs={12} sm={6} className="project-img" sx={{ color: "white" }}>
      IMG
    </Grid>
  );

  const Desc = (
    <Grid
      item
      xs={12}
      sm={6}
      className="project-desc"
      sx={{ color: "white", textAlign: reverseOrder ? "left" : "right" }}
    >
      <h1>{header}</h1>
      <Card sx={{ maxWidth: 345, marginLeft: reverseOrder ? "0" : "auto" }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      {stack &&
        stack.map((s) => {
          return (
            <>
              <span>{s.name}</span>
              <CIcon icon={s.icon} />
            </>
          );
        })}
      <FaGithubAlt />
    </Grid>
  );

  return (
    <>
      {reverseOrder ? Desc : Img}
      {reverseOrder ? Img : Desc}
    </>
  );
}

export default function Projects() {
  return (
    <>
      <h1>Things I've Built</h1>
      <Grid
        container
        spacing={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "75%",
          margin: "auto",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((project, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <Project
              reverseOrder={isOdd}
              content={project}
              header={`Title ${index}`}
            />
          );
        })}
      </Grid>
    </>
  );
}
