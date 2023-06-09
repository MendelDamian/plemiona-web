import { Col, Row } from 'antd';

import { ResourcesImg, ResourcesTag } from './styles';

export interface ResourcesProps {
  name: string;
  width?: number;
  height?: number;
  capacity: number;
  own: number;
}

const ResourcesComponent = ({ name, width = 64, height = 64, capacity, own }: ResourcesProps) => {
  return (
    <Row gutter={[8, 0]} align="middle">
      <Col>
        <ResourcesImg type={name} width={width} height={height} />
      </Col>
      <Col>
        <ResourcesTag>
          {Math.floor(own)} / {Math.floor(capacity)}
        </ResourcesTag>
      </Col>
    </Row>
  );
};

export default ResourcesComponent;
