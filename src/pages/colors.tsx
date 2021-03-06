import type { NextPage } from 'next';
import { useProjectContext } from 'components/ProjectProvider';
import { Color } from 'components/Color';

const Page: NextPage = () => {
  const { state } = useProjectContext();

  return (
    <>
      <h1>Colors</h1>
      <div className="color-container">
        {state.colors?.map((color) => (
          <Color key={color.hex} color={color} />
        ))}
      </div>
    </>
  );
};

export default Page;
