import { IRadioOptions } from './types';

export const radioOptions: IRadioOptions = {
  reviewType: {
    style: null,
    row: false,
    options: [
      {
        value: 'singleFile',
        label: 'Single file review (e.g. video, image, or PDF)',
        disabled: false,
        className: '',
        style: null,
      },
      {
        value: 'singleLink',
        label: 'Single link review (e.g. LinkedIn URL, portfolio)',
        disabled: false,
        className: '',
        style: null,
      },
      {
        value: 'singleReview',
        label:
          'Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)',
        disabled: true,
        className: 'custom-form-control-label',
        style: null,
      },
    ],
  },
  reviewFileType: {
    style: { display: 'flex', flexWrap: 'wrap' },
    row: true,
    options: [
      {
        value: 'video',
        label: 'Video',
        disabled: true,
        className: 'custom-form-control-label',
        style: null,
      },
      {
        value: 'image',
        label: 'Image',
        disabled: true,
        className: 'custom-form-control-label',
        style: null,
      },
      {
        value: 'file',
        label: 'File (PDF, txt, etc)',
        disabled: true,
        className: 'custom-form-control-label',
        style: { flexBasis: '100%', marginTop: '8px' },
      },
    ],
  },
};
