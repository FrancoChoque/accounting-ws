import Router from 'next/router';

export const redirect = (route, ctx = {}) => {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: `${process.env.APP_URL}${route}`,
    });
    ctx.res.end();
  } else {
    Router.push(route);
  }
};

export const getSession = (ctx = {}) => {
  if (ctx.req) {
    return ctx.req.session && ctx.req.session.user;
  }
  return ctx.store && ctx.store.getState().auth.user;
};
