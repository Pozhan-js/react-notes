import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import SidebarSearchField from "@/components/SidebarSearchField";
import SidebarNoteList from "@/components/SidebarNoteList";
import EditButton from "@/components/EditButton";
import NoteListSkeleton from "@/components/NoteListSkeleton";
import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";

export default function Sidebar() {
  const t = useTranslations("Basic");
  const messages = useMessages();
  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width={22}
              height={20}
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <NextIntlClientProvider
            messages={{
              Basic: messages.Basic,
            }}
          >
            <SidebarSearchField search={t("search")} />
          </NextIntlClientProvider>
          <EditButton noteId={null}>{t("new")}</EditButton>
          {/* SideSearchField */}
        </section>
        <nav>
          {/* SidebarNoteList */}

          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
}
