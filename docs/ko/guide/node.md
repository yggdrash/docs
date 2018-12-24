# 노드
## 노드 실행

노드를 실행하여 우리가 개발한 브랜치체인이 정상적으로 동작하는지 확인합니다.
```bash
docker run --rm -p 8080:8080 -v $HOME/.yggdrash:/.yggdrash yggdrash/yggdrash-node
```
<p align="center">
<img src="https://media.giphy.com/media/9GIF5KiW07xLgjprIY/giphy.gif" width="80%" height="400"/>
</p>

확인을 위해서 편리하게 사용할 수 있는 REST API 를 활용해봅시다.
```bash
curl http://localhost:8080/branches
```
**브랜치체인이 등록된 응답 결과**

<p align="center">
<img src="https://media.giphy.com/media/1ZmYiI8kwDtGWUs29I/giphy.gif" width="80%" height="400"/>
</p>