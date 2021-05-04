import { toast } from "react-toastify";

const copyUrlToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    toast.success('Url copied');
}

export default copyUrlToClipboard;