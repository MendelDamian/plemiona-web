import styled from 'styled-components';
import { Col } from 'antd';

export const Highlight = styled.span`
  font-weight: bold;
`;

export const SectionText = styled.span`
  font-size: 1.2em;
  white-space: pre-wrap;
  float: left;
  clear: left;
`;

export const Count = styled.span`
  font-size: 2em;
`;

export const Report = styled(Col)`
  border: 1px solid #000;
  padding: 0.5em;
`;
