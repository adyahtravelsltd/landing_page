import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#service">Services</Link>
        </li>
        <li>
          <Link href="#offers">Offers</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="#contact_us">Contact us</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Lets\n'}
            <span className="text-primary-500">Travel. Experience. Live.</span>
          </>
        }
        description="The easiest way to travel."
        button={
          <Link href="/">
            <Button xl>Get in touch now</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
