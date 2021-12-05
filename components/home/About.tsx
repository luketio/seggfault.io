import { Grid } from "semantic-ui-react";
import Image from "next/image";

import Section from "../common/Section";

export default function About() {
  return(
    <Section name="About">
      <Grid.Column width={4} >
        <Image src="/images/logo.svg" alt="Logo" height="180vh" width="180vh" />
      </Grid.Column>

      <Grid.Column width={12} style={{fontSize: "20px"}}>
        <p>
          Hi! My name is Luke Tong, and I am a junior at PHS.
          Some of my interests include programming(see my various <a>projects</a>),
          activism(see my <a>posts</a> on various topics as well as my <a>non-profit</a>),
          and reading(see my <a>reading list</a>)
        </p>
      </Grid.Column>
    </Section>
   );
}
