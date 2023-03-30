/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Layout, BaseHeaderLayout, ContentLayout} from '@strapi/design-system/Layout';
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import { Illo } from "../../components/Illo";
import SermonModal from "../../components/SermonModal";
import SermonCount from "../../components/SermonCount";
import SermonTable from "../../components/SermonTable";

const HomePage = () => {
  const [ sermonData, setSermonData ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  async function addSermon(data) {
    setSermonData([...sermonData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleSermon(data) {
    alert("Add Toggle Sermon in API");
  }

  async function deleteSermon(data) {
    alert("Add Delete Sermon in API");
  }

  async function editSermon(id, data) {
    alert("Add Edit Sermon in API");
  }

  return (
    <Layout>
      <BaseHeaderLayout
        title="Sermon Plugin"
        subtitle="All your sermon in one place"
        as="h2"
      />

      <ContentLayout>
        { sermonData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="No sermons available"
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add a sermon
              </Button>
            }
          />
        ) : (
          <>
            <SermonCount count={sermonData.length} />
            <SermonTable
              sermonData={sermonData}
              setShowModal={setShowModal}
              toggleSermon={toggleSermon}
              deleteSermon={deleteSermon}
              editSermon={editSermon}
            />
          </>
        )}
      </ContentLayout>
      {showModal && <SermonModal setShowModal={setShowModal} addSermon={addSermon} />}
    </Layout>
  );
};

export default HomePage;
