<?php

namespace App\Services;

class YuruhuwaService
{
    private $endponturl = 'http://docsearch-jamas-rev3-gw.mmtwins.org/?page=Api/SearchDocument';
    private $apikey = '53146630ff5479246f155fe567b84c94';

    function http_post($url, $data)
    {
        $data_url = http_build_query($data);
        $data_len = strlen($data_url);

        return [
            'content' => file_get_contents(
                $url,
                false,
                stream_context_create([
                    'http' => [
                        'method' => 'POST',
                        'header' => "Content-Type: application/x-www-form-urlencoded\r\nContent-Length: $data_len\r\n",
                        'content' => $data_url,
                    ],
                ])
            ),
            'headers' => $http_response_header,
        ];
    }

    public function getYuruhuwa(string $query)
    {
        $offset = 10;
        $post_data = [
            'search_text' => $query,
            'offset' => $offset,
            'apikey' => $this->apikey,
        ];

        $response_body = $this->http_post($this->endponturl, $post_data);
        $result = json_decode($response_body['content']);
        return $result;
    }
}
