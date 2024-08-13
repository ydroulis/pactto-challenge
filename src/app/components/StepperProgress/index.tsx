import React, { Dispatch, SetStateAction } from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {
  Box,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  styled,
} from '@mui/material';
import Link from 'next/link';
import { Check } from '@mui/icons-material';

interface IStepperProgressProps {
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}

const StepperProgress: React.FC<IStepperProgressProps> = ({
  steps,
  setSteps,
}) => {
  const QontoConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#B8B8B8',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#1DBBA5',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#B8B8B8',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
      color:
        theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
        color: '#B8B8B8',
      }),
      '& .QontoStepIcon-completedIcon': {
        color: '#1DBBA5',
        zIndex: 1,
        fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },
    }),
  );

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={steps}
        alternativeLabel
        connector={<QontoConnector />}
      >
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>
            <p>
              Open your inbox and{' '}
              <Link
                onClick={() =>
                  steps === 0 && setSteps((prev: number) => prev + 1)
                }
                target="_blank"
                href="https://mail.google.com/"
              >
                verify your email
              </Link>
            </p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>
            <p>
              Check the{' '}
              <Link
                onClick={() =>
                  steps === 1 && setSteps((prev: number) => prev + 1)
                }
                target="_blank"
                href="https://www.youtube.com/watch?t=93&v=CvbvDGsZsKM"
              >
                {' '}
                short video of Pactto in action
              </Link>
            </p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>
            <p>
              Download Pactto for{' '}
              <Link
                onClick={() =>
                  steps === 2 && setSteps((prev: number) => prev + 1)
                }
                target="_blank"
                href="https://pactto.com/#download"
              >
                Mac
              </Link>{' '}
              or{' '}
              <Link
                onClick={() =>
                  steps === 2 && setSteps((prev: number) => prev + 1)
                }
                target="_blank"
                href="https://pactto.com/#download"
              >
                Windows
              </Link>
            </p>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={QontoStepIcon}>
            <p>
              Download Pactto for{' '}
              <Link
                onClick={() =>
                  steps === 3 && setSteps((prev: number) => prev + 1)
                }
                target="_blank"
                href="https://apps.apple.com/us/app/pactto-record-video-feedback/id1662226619"
              >
                ios
              </Link>{' '}
              or{' '}
              <Link
                onClick={() =>
                  steps === 3 && setSteps((prev: number) => prev + 1)
                }
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.pactto.replay"
              >
                Android
              </Link>
            </p>
          </StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};

export default StepperProgress;
