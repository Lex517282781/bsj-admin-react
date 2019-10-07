import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './style.less';

export default class SelectLang extends PureComponent {
  render() {
    const { className } = this.props;
    const selectedLang = 'zh-CN';
    const locales = ['zh-CN', 'zh-TW'];
    const languageLabels = {
      'zh-CN': '简体中文',
      'en-US': 'English'
    };
    const languageIcons = {
      'zh-CN': '🇨🇳',
      'en-US': '🇬🇧'
    };
    const langMenu = (
      <Menu
        className={styles.menu}
        selectedKeys={[selectedLang]}
        onClick={this.changeLang}
      >
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" title={<FormattedMessage id="navBar.lang" />} />
        </span>
      </HeaderDropdown>
    );
  }
}
