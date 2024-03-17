import { Section } from '@/layout/Section';
// import { Offers } from 'next-seo/lib/types';

const Offers = () => (
  <Section title="Offers" description="We've got you covered" id="offers">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">Service 1</td>
          <td className="border-2 border-gray-300 p-3">Service 2</td>
          <td className="border-2 border-gray-300 p-3">Service 3</td>
          <td className="border-2 border-gray-300 p-3">Service 4</td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Offers };
