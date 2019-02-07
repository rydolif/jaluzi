<?php
	$SITE_TITLE = 'Jaluzi';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$widht = htmlspecialchars(trim($_POST['widht']));
		$height = htmlspecialchars(trim($_POST['height']));
		$type = htmlspecialchars(trim($_POST['type']));

		$baseone = htmlspecialchars(trim($_POST['baseone']));
		$basetwo = htmlspecialchars(trim($_POST['basetwo']));
		$basethree = htmlspecialchars(trim($_POST['basethree']));

		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';
		$to = 'info@jaluzi5.by';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Имя: '.$name."<br>";
		$data .= 'Телефон: '.$phone."<br>";

		if ( $widht != '' ) {
			$data .= 'Ширина: ' . $widht ."<br>";
		}
		if ( $type != '' ) {
			$data .= 'Тип изделия: ' . $type ."<br>";
		}

		if ( $height != '' ) {
			$data .= 'Высота: ' . $height ."<br>";
		}

		if ( $baseone != '' ) {
			$data .= 'Выберите тип изделия: ' . $baseone ."<br>";
		}

		if ( $basetwo != '' ) {
			$data .= 'Какая категория штор вас интересует: ' . $basetwo ."<br>";
		}

		if ( $basethree != '' ) {
			$data .= 'На сколько окон нужно установить рольшторы: ' . $basethree ."<br>";
		}

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();

?>