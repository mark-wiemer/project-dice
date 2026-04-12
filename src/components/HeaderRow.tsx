import logo from "../assets/logo.svg";

type Props = {
    header?: React.ReactNode;
};

export default function HeaderRow({ header }: Props) {

    return (
        <div className="header-row">
            <img src={logo} alt="Website Logo" width="75" height="75" className="logo" />
            <h1>
                {header}
            </h1>
        </div>
    );
}
