import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSession, redirect } from '../lib/next';
import Spinner from '../components/UI/Spinner/Spinner';
import { setUser } from '../store/auth/actions';

export default function(WrappedComponent) {
  class Authenticate extends Component {
    static async getInitialProps(ctx) {
      try {
        const session = getSession(ctx);
        if (!session) {
          redirect('/login', ctx);
          return {};
        }
        const initialProps = WrappedComponent.getInitialProps
          ? await WrappedComponent.getInitialProps(ctx, session)
          : null;
        return { ...initialProps, session };
      } catch (error) {
        redirect('/login', ctx);
        return {};
      }
    }

    componentDidMount = () => {
      const { user, session, setUserAction } = this.props;
      if (!user && session) {
        setUserAction(session);
      }
    };

    render() {
      const { user, session } = this.props;
      return <div>{user && session ? <WrappedComponent {...this.props} /> : <Spinner />}</div>;
    }
  }

  const mapStateToProps = ({ auth }) => ({
    user: auth.user,
  });

  const mapDispatchToProps = dispatch => ({
    setUserAction: user => dispatch(setUser(user)),
  });

  Authenticate.propTypes = {
    session: PropTypes.object,
    setUserAction: PropTypes.func,
    user: PropTypes.object,
  };

  Authenticate.defaultProps = {
    session: null,
    setUserAction: () => {},
    user: null,
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}
