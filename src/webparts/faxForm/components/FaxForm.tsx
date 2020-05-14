import * as React from 'react';
import styles from './FaxForm.module.scss';
import { IFaxFormProps } from './IFaxFormProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FaxForm extends React.Component<IFaxFormProps, {}> {
  public render(): React.ReactElement<IFaxFormProps> {
    return (
      <div className={ styles.faxForm }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to Fax Form!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
