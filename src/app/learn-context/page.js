import Heading from "@/app/commponents/heading";
import Section from "@/app/commponents/section";

export default function Page() {
  return (
    <>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Hello</Heading>
          <Section>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section>
              <Heading>Sub-sub Heading</Heading>
              <Heading>Sub-sub Heading</Heading>
              <Heading>Sub-sub Heading</Heading>
              <Section>
                <Heading>Sub-sub-sub Heading</Heading>
                <Heading>Sub-sub-sub Heading</Heading>
                <Heading>Sub-sub-sub Heading</Heading>
                <Section>
                  <Heading>Sub-sub-sub-sub Heading</Heading>
                  <Heading>Sub-sub-sub-sub Heading</Heading>
                  <Heading>Sub-sub-sub-sub Heading</Heading>
                  <Section>
                    <Heading>Sub-sub-sub-sub Heading</Heading>
                    <Heading>Sub-sub-sub-sub Heading</Heading>
                    <Heading>Sub-sub-sub-sub Heading</Heading>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
}
