import dynamic from "next/dynamic";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  async () => {
    const mod = await import("react-draft-wysiwyg");
    return mod.Editor;
  },
  { loading: () => null, ssr: false }
);

export default Editor;
