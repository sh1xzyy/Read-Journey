import { LoginForm } from "../../modules/auth";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import AuthCard from "../../shared/ui/AuthCard/AuthCard";
import Logo from "../../shared/ui/logo/Logo";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.wrapper}>
          <AuthCard type="authWrapper">
            <div className={css.logoWrapper}>
              <Logo />
            </div>
            <h2 className={css.title}>
              Expand your mind, reading <span>a book</span>
            </h2>
            <LoginForm />
          </AuthCard>

          {windowWidth < 768 ||
            (windowWidth > 1268 && (
              <div className={css.phoneCard}>
                <AuthCard type="iphoneWrapper">
                  <div className={css.img}>
                    <picture>
                      <source
                        srcSet="/auth/iphone-desktop@1x.png 1x, /auth/iphone-desktop@2x.png 2x"
                        media="(min-width: 1280px)"
                      />
                      <img
                        src="/auth/iphone-mobile@1x.png"
                        srcSet="/auth/iphone-mobile@2x.png 2x"
                        alt="iPhone"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </AuthCard>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
