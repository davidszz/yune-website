export default function Page404() {
  return (
    <pre 
      style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }} 
      dangerouslySetInnerHTML={{ __html: "{ code: 404, message: 'not found' }" }} 
    />
  );
}