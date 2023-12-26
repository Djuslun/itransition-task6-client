import { useSelector } from "react-redux";

export const useExportImage = (id) => {
  const { canvasDataUri } = useSelector(store => store.canvas)

  const downLoadImage = (uri, name) => {
    const link = document.createElement('a')
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    downLoadImage(canvasDataUri, `image${id}`)
  }

  return handleExport
}