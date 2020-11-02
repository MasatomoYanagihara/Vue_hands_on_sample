import axios from 'axios';
import { UnauthorizedHandler } from '@/axios/unauthorized-handler';
import { UnprocessableEntityHandler } from '@/axios/unprocessable-entity-handler';
import { RetryHandler } from '@/axios/retry-handler';

// パスを指定する時に「api/」を省略できる。
axios.defaults.baseURL = 'api/';

// response.use()でレスポンス受信時のinterceptorとして追加される。
// 上から順に適用される。
// axios.interceptors.response.use(成功時の処理, 失敗時の処理);
axios.interceptors.response.use(
  response => response,
  UnauthorizedHandler.onRejected(),
);
axios.interceptors.response.use(
  response => response,
  UnprocessableEntityHandler.onRejected(),
);
axios.interceptors.response.use(
  response => response,
  RetryHandler.onRejected(),
);
