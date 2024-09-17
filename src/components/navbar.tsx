import { h, FC, BaseProps } from "tsx-dom";

interface NavbarProps extends BaseProps {
}

export const Navbar: FC<NavbarProps> = () => (
  <nav class={`navbar is-fixed-top`} role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item oswald-font is-size-3-tablet is-size-4-mobile">
        <span class="icon-text">
          <span class="icon">
            <span class="material-symbols-outlined is-size-3-tablet is-size-4-mobile">earthquake</span>
          </span>
          <span>DobbyAI</span>
        </span>
      </p>

      <p class="navbar-burger oswald-font is-size-4-tablet is-size-5-mobile">18 settembre '24</p>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <div class="navbar-item oswald-font is-size-4-tablet is-size-5-mobile">
          <p>18 settembre '24</p>
        </div>
      </div>
    </div>
  </nav>
);

export const PhantomNavbar: FC<BaseProps> = () => (
  <nav class="navbar phantom-navbar" role="navigation" aria-label="main navigation">
  </nav>
);
