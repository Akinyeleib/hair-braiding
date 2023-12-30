export function extractTokenFromHeader(request: any) : string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type == 'Bearer' ? token : undefined;
}
