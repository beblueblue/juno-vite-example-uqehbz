import {
  palette2,
  radius,
  RcBox,
  RcIcon,
  styled,
  spacing,
  RcTypography,
} from '@ringcentral/juno';

import { DragableArea, JumpToLatest } from '@ringcentral/juno-icon';

const DragIcon = styled(RcIcon)``;

const Card = styled.div`
  margin:${spacing(5)};
  background: ${palette2('neutral', 'b03')};
  border-radius: ${radius('xl')};
  padding: ${spacing(4, 4, 4, 2)};
  display: inline-flex;
  align-items: center;
  min-width: 200px;

  ${DragIcon} {
    visibility: hidden;
    cursor: grab;
  }

  :hover {
    ${DragIcon} {
      visibility: visible;
    }
  }
`;

const CardInner = styled.div`
  margin-left: ${spacing(3)};
`;

const CardInfo = styled.div`
  margin: ${spacing(1, 0, 2, 0)};
  display: flex;
  align-items: center;
`;

export const DataCard = () => {
  return (
    <Card>
      <DragIcon symbol={DragableArea} size="small" />
      <CardInner>
        <RcTypography variant="title2" color="neutral.f06">
          800
        </RcTypography>
        <CardInfo>
          <RcTypography variant="caption2" color="danger.f02" display="inline">
            -35(8.05%)
          </RcTypography>
          <RcBox clone margin="0 4px 0 8px">
            <RcIcon symbol={JumpToLatest} size="xsmall" />
          </RcBox>
          <RcTypography variant="caption2" color="danger.f02" display="inline">
            today
          </RcTypography>
        </CardInfo>
        <RcTypography variant="caption2" color="neutral.f04">
          Page Views
        </RcTypography>
      </CardInner>
    </Card>
  );
};
