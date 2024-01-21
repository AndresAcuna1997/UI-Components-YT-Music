import { FC } from 'react';
import styles from '../../styles/youTubeLabelCategory.module.css';

interface Props {
  label: string;
}

export const YouTubeLabelCategory: FC<Props> = ( { label } ) => {
  return (
    <div style={ { backgroundColor: 'black', padding: '10px', display: 'inline-block' } }>
      <div className={ styles[ 'label' ] }>
        { label }
      </div >
    </div>
  );
};