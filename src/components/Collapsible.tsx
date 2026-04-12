import { useId } from "react";

type Props = {
  label: string;
  title?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function Collapsible({
  label,
  title,
  children,
  defaultOpen = false,
}: Props) {
  const id = useId();

  return (
    <div className="collapsible">
      <input type="checkbox" id={id} defaultChecked={defaultOpen} />
      <label htmlFor={id}>{label}</label>

      <div className="collapsible-text">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
