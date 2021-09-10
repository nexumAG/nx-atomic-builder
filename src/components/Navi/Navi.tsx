import Link from 'next/link';
import { ImageData, useProjectContext } from 'components/ProjectProvider';
import { groupBy, compareField } from 'libs/utils/sort';

export const Navi = () => {
  const { state } = useProjectContext();

  return (
    <>
      <h3>Pages</h3>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/img-add">
            <a>Add image</a>
          </Link>
        </li>
      </ul>
      <h3>Images</h3>
      <ul>
        {state.images.sort(compareField('name')).map((img) => (
          <li key={img.id}>
            <Link href={`/img-edit/${img.id}`}>
              <a>{img.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h3>Components</h3>
      <ul>
        {groupBy(state.components, 'category').map(([category, components]) => (
          <li key={category}>
            <span className="category">{category || 'no category'}</span>
            <ul>
              {components.sort(compareField('name')).map((component) => (
                <li key={component.id}>
                  <Link href={`/component/${component.id}`}>
                    <a>{component.name}</a>
                  </Link>
                  <ul>
                    {state.imageRefs.sort(compareField('variant')).map((imageRef) =>
                      imageRef.componentId === component.id ? (
                        <li key={imageRef.id}>
                          <Link href={`/component-edit/${imageRef.id}`}>
                            <a>{imageRef.variant ?? `variant ${imageRef.id}`}</a>
                          </Link>
                        </li>
                      ) : null
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
