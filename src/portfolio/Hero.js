import React from "react";
import styled from "styled-components";
import {
  Block,
  Button,
  Grid,
  HeadingStroke,
  Paragraph,
  Relative,
  Stack,
} from "components";
import { Content } from "content";
import { HeaderOffset } from "Header";
import { RouterLink } from "router";
import { Skeleton } from "skeleton";

import { PortfolioScrollRoutes } from "./portfolio.routes";
import { FillImage } from "./FillImage";

const ImageOverlay = styled(Block)`
  position: absolute;
  top: 0;
  bottom: 0%;
  left: 0;
  right: 0;
  ${({ theme }) => theme.imageOverlay};
`;
ImageOverlay.displayName = "ImageOverlay";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1563639326633-3d331a93af06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

export const Hero = () => {
  return (
    <Grid as="section" gridTemplateColumns={["initial", "initial", "6fr 4fr"]}>
      <Block
        id="hero-left"
        key="left"
        bg="surfaceBody"
        display={["none", "none", "block"]}
      >
        <Relative width="100%" height="100%">
          <React.Suspense fallback={null}>
            <ImageOverlay width="100%" height="100%">
              <FillImage src={HERO_IMAGE} />
            </ImageOverlay>
          </React.Suspense>

          <HeaderOffset
            alignItems="center"
            display="flex"
            height="100%"
            position="relative"
            zIndex={1}
          >
            <Block px={[3, 4, 5]}>
              <HeadingStroke
                fontSize={[9, 8, 9, "7.5rem"]}
                color="surfaceCallout"
              >
                <Skeleton display="inline-block">
                  <Content id="portfolio.heroTitle" />
                </Skeleton>
              </HeadingStroke>
            </Block>
          </HeaderOffset>
        </Relative>
      </Block>

      <Block
        id="hero-right"
        key="right"
        textAlign="left"
        variant="Primary"
        bg="surfaceBody"
        position="relative"
      >
        <Block id="hero-mobile-image" display={["block", "none"]}>
          <React.Suspense fallback={null}>
            <ImageOverlay width="100%" height="100%">
              <FillImage src={HERO_IMAGE} />
            </ImageOverlay>
          </React.Suspense>
        </Block>

        <Grid gridTemplateRows="1fr auto" minHeight="600px">
          <HeaderOffset>
            <Block py={5} px={[4, 5]}>
              <Stack gap={4}>
                <Block display={["block", "none"]}>
                  <HeadingStroke fontSize={9} color="surfaceCallout">
                    <Skeleton display="inline-block">
                      <Content id="portfolio.heroTitle" />
                    </Skeleton>
                  </HeadingStroke>
                </Block>

                <Stack gap={2}>
                  <Skeleton>
                    <Paragraph fontSize={3} fontFamily="secondary">
                      <Content id="portfolio.heroSubtitle" />
                    </Paragraph>
                    <Paragraph fontFamily="secondary" fontSize={3}>
                      Currently building the future of commerce and fulfillment
                      as a <strong>Senior Frontend Developer at Shopify</strong>
                      .
                    </Paragraph>
                  </Skeleton>
                </Stack>
              </Stack>
            </Block>
          </HeaderOffset>

          <Block>
            <Grid
              gridGap={[2, "0px"]}
              gridTemplateColumns={["none", "1fr 1fr"]}
              overflow="hidden"
              p={[4, "0px"]}
            >
              <Button
                as={RouterLink}
                to={{ hash: PortfolioScrollRoutes.Work }}
                variant="Secondary"
                style={{ borderRadius: 0 }}
              >
                See Work
              </Button>
              <Button
                as="a"
                href="mailto:brendan.rygus@gmail.com"
                variant="Cta"
                style={{ borderRadius: 0 }}
              >
                Get in touch
              </Button>
            </Grid>
          </Block>
        </Grid>
      </Block>
    </Grid>
  );
};
