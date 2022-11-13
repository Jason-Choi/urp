export const HEADER = {
  H_MAIN_DESKTOP: 88,
};


export const DOMAIN = 'https://www.example.com';

export const ENDPOINT = {
  getRandom: DOMAIN + '/randomproduct',
  getIndex: (index: number) => DOMAIN + '/getproduct/' + index,
  deleteIndex: (index: number) => DOMAIN + '/deleteproduct/' + index,
  submitIndex: (index: number) => DOMAIN + '/submitproduct/' + index,
}