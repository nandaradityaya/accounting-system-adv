import { Route, Routes } from "react-router-dom";

import PostingJournal from "../../pages/transaction/posting-jurnal";

export function PostingJournalRoute() {
  return (
    <Routes>
      <Route path="/" element={<PostingJournal />} />
      {/* <Route path="/:journalId" element={<InputJournalDetail />} /> */}
    </Routes>
  );
}
