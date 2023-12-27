import { Button } from "@mui/base";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useExportImage } from "../../hooks/useExportImage";

const ExportImageButton = ({ id }) => {
  const handleExport = useExportImage(id)

  return (
    <>
      <Button
        onClick={handleExport}
        className="header-button buttons-border">
        <FileDownloadIcon />
      </Button>
    </>
  )
}

export default ExportImageButton