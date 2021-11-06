import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Pagina principal',
    icon: 'icon-bank',
    class: ''
  },
  {
    path: '/login',
    title: 'Inciar Sesión',
    icon: 'icon-key-25',
    class: ''
  },
  {
    path: '/productos',
    title: 'Productos',
    icon: 'icon-molecule-40',
    class: ''
  },
  {
    path: '/clientes',
    title: 'Clientes',
    icon: 'icon-satisfied',
    class: ''
  },
  {
    path: '/ventas',
    title: 'Ventas',
    icon: 'icon-cart',
    class: ''
  },
  {
    path: '/reportes',
    title: 'Reportes',
    icon: 'icon-paper',
    class: ''
  },
  {
    path: '/consolidacion',
    title: 'Consolidacion',
    icon: 'icon-sound-wave',
    class: ''
  },
  {
    path: '/icons',
    title: 'Iconos',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/maps',
    title: 'Mapas',
    icon: 'icon-pin',
    class: '' },
  {
    path: '/notifications',
    title: 'Notificacioness',
    icon: 'icon-bell-55',
    class: ''
  },

  {
    path: '/user',
    title: 'Perfil de usuario',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/tables',
    title: 'Lista de tablas',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/typography',
    title: 'Tipografia',
    icon: 'icon-align-center',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
