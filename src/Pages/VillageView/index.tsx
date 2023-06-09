import { useState } from 'react';

import { Button, Col, Row } from 'antd';

import Village from 'Containers/Village';
import ResourcesTable from 'Containers/ResourcesTable';
import { Background, CenteredBox } from 'Components/CommonComponents';
import UpgradeView from 'Containers/UpgradeView';

const VillageView = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Background>
        <CenteredBox>
          <Button onClick={() => setModal(true)}>Modal</Button>
          <UpgradeView open={modal} setOpen={setModal} />
          <Row gutter={[16, 16]} align="top" justify="center">
            <Col>
              <Village />
            </Col>
            <Col>
              <ResourcesTable />
            </Col>
          </Row>
        </CenteredBox>
      </Background>
    </>
  );
};

export default VillageView;
