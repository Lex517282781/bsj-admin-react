import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import DocumentTitle from 'react-document-title';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './style.less';
import logo from '@/assets/imgs/logo.svg';

const links = [
  {
    key: 'help',
    title: <FormattedMessage id="layout.user.link.help" />,
    href: ''
  },
  {
    key: 'privacy',
    title: <FormattedMessage id="layout.user.link.privacy" />,
    href: ''
  },
  {
    key: 'terms',
    title: <FormattedMessage id="layout.user.link.terms" />,
    href: ''
  }
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 蚂蚁金服体验技术部出品
  </Fragment>
);

class UserLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <DocumentTitle title={'注册登录'}>
        <div className={styles.container}>
          <div className={styles.lang}>
            <SelectLang />
          </div>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                {/* <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>Ant Design</span>
                </Link> */}
              </div>
              <div className={styles.desc}>
                Ant Design 是西湖区最具影响力的 Web 设计规范
              </div>
            </div>
            {children}
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
