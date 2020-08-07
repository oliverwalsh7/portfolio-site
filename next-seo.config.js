const title = 'V. Oliver Walsh - Software Developer';
const description =
  'Personal site.';

const SEO = {
  title,
  description,
  canonical: 'https://vasilioswalsh.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://vasilioswalsh.com',
    title,
    description,
    images: [
      {
        url: 'https://vasilioswalsh/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@ogvasilios',
    site: '@ogvasilios',
    cardType: 'summary_large_image'
  }
};

export default SEO;
