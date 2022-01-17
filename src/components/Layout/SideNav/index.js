import "./sidenav.css";
import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  BsPlus,
  BsArrowBarLeft,
  BsArrowBarRight,
  BsFillGridFill,
} from "react-icons/bs";
import { FaEvernote } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isCollapsed, toggleCollapsed] = useState(true);

  const handleToggle = () => toggleCollapsed(!isCollapsed);

  return (
    <ProSidebar collapsed={isCollapsed}>
      <SidebarHeader>
        <Menu iconShape="circle">
          <MenuItem icon={<FaEvernote />}>
            Evernote
            <Link to="/" />
          </MenuItem>
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<BsFillGridFill />}>
            Painel de Controle
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<BsPlus />}>
            Criar nota
            <Link
              to={{
                pathname: "/notes",
                state: { newNote: true },
              }}
            />
          </MenuItem>
          <MenuItem icon={<CgNotes />}>
            Notas
            <Link to="/notes" />
          </MenuItem>
          <MenuItem icon={<BiNotepad />}>
            Categorias
            <Link to="/notebooks" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu iconShape="circle">
          {(isCollapsed && (
            <MenuItem icon={<BsArrowBarRight />} onClick={handleToggle} />
          )) || (
            <MenuItem icon={<BsArrowBarLeft />} onClick={handleToggle}>
              Close Menu
            </MenuItem>
          )}
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideNav;
